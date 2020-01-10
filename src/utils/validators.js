const mbToBytes = (mb) => mb * 1000 * 1000

export const fileSize = (maxSize=2) =>
  (file) => {
    // eslint-disable-next-line
    console.log(file)
    return !file || (file.size < mbToBytes(maxSize))
  }

// export const fileSize =
//   (file) => !helpers.req(file) && (file.size < mbToBytes(2))