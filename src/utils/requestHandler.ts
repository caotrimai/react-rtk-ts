export const handleRequest = (promise: Promise<any>) => {
  return promise
    .then((response) => ([response, undefined]))
    .catch((error) => ([undefined, error]))
}