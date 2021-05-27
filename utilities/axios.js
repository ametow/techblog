import axios from "axios";

export default axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  timeout: 1000,
  headers: { "X-Custom-Header": "blog" },
  //   onUploadProgress: function (progressEvent) {
  //     // Do whatever you want with the native progress event
  //   },

  //   // `onDownloadProgress` allows handling of progress events for downloads
  //   // browser only
  //   onDownloadProgress: function (progressEvent) {
  //     // Do whatever you want with the native progress event
  //   },
});
