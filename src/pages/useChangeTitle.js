const useChangeTitle = (title) => {
  console.log(process.env.SITE_NAME)
  return document.title = `${process.env.APP_NAME} - ${title}`
}

export default useChangeTitle