import React from 'react';
import moment from 'moment';

const FormattedDate = (props) => {
  const {
    date,
    format = 'MMM YYYY'
  } = props;
  const formattedDate = moment(date).format(format);
  return (
    <>
      {formattedDate}
    </>
  )
}

export default FormattedDate
