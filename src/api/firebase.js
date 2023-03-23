import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTh_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATA_BASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
// app이 초기화 되면 auth를 이용하여 getAuth를 가지고 옴
const auth = getAuth();
//provider를 이용하여 아래의 signInWithPopup을 이용함
const provider = new GoogleAuthProvider();

//어플리케이션에서 로그인이 필요할때 firebase의 코드에서
//아래의 로그인을 호출해줄거임
export function login() {
  // 사용자가 로그인을 클릭할때 아래의 코드를 호출함
  signInWithPopup(auth, provider)
    .then((result) => {
      //사용자의 정보는 user 안에 들어옴
      const user = result.user;
      console.log(user);
    })
    .catch(console.error);
}
