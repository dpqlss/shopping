//선택 된 파일을 전달해주면 알아서 업로드 해주고 업로드 된 URL을 return해줄거임
export async function uploadImage(file) {
  const data = new FormData();
  //data에 append를 이용해서 file은 우리가 전달받은 file을 넣을거고
  data.append("file", file);
  data.append("upload_preset", process.env.REACT_APP_CLOUDINARY_PRESET);
  return fetch(process.env.REACT_APP_CLOUDINARY_URL, {
    method: "POST",
    body: data,
  })
    .then((res) => res.json())
    .then((data) => data.url);
}
