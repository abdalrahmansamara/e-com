import moment from 'moment';

const formatDate = (date: Date | number | string) => {
  return moment(date).format('DD-MM-YYYY');
};


export default {
  formatDate
}
