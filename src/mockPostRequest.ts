export const mockPostToServer = async (values: any) => {
  console.log('sending...', values);
  const success = Math.random() > 0 ? true : false;
  return new Promise((res, rej) => {
    setTimeout(() => {
      if (success) {
        res({ status: 200 });
      } else {
        rej({ status: 400, message: 'Something went wrong!' });
      }
    }, 500);
  });
};
