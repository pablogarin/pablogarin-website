export const colorObjectToHex = ({red, green, blue, alpha}) => {
  const opacity = Math.ceil(alpha*255);
  const hexColor = `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}${opacity.toString(16)}`;
  return hexColor;
}

export const colorHexToObject = (hexColor) => {
  const re = new RegExp('^#([0-9a-f]{2,2})([0-9a-f]{2,2})([0-9a-f]{2,2})([0-9a-f]{0,2})$', 'i');
  if (re.test(hexColor)) {
    const result = re.exec(hexColor);
    const red = parseInt(result[1], 16);
    const green = parseInt(result[2], 16);
    const blue = parseInt(result[3], 16);
    const alpha = result[4]
      ? parseInt(result[4], 16)
      : 1;
    return {
      red,
      green,
      blue,
      alpha
    }
  } else {
    throw new Error(`Invalid Hex color: ${hexColor}`);
  }
}

export const drawCircle = ({x, y, radius, color='#000'}, context) => {
  context.beginPath();
  context.arc(x,y,radius,0,Math.PI*2, false);
  context.fillStyle = typeof color === 'string' ? color : colorObjectToHex(color) ;
  context.fill();
};

export const drawRect = ({x,y,width,height}, context) => {
  context.strokeStyle = '#000';
  context.lineWidth = 1;
  context.rect(x, y, width, height);
  context.stroke();
}

export const animate = (canvas, context, callback) => {
  requestAnimationFrame(() => {
    animate(canvas, context, callback)
  })
  context.clearRect(0, 0, canvas.width, canvas.height)
  if (callback) callback();
};
