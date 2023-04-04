import { initializeApp } from "firebase/app";
import { v4 as uuid } from "uuid";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getDatabase, ref, set, get } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTh_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATA_BASE_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();
const database = getDatabase(app);

//로그인
export function login() {
  signInWithPopup(auth, provider).catch(console.error);
}

//로그아웃
export function logout() {
  signOut(auth).catch(console.error);
}

//사용자의 상태변경
export function onUserStateChange(callback) {
  onAuthStateChanged(auth, async (user) => {
    const updateUser = user ? await adminUser(user) : null;
    callback(updateUser);
  });
}

//어드민 사용자 판단 여부
async function adminUser(user) {
  return get(ref(database, "admins")) //
    .then((snapshot) => {
      if (snapshot.exists()) {
        const admins = snapshot.val();
        console.log(admins);
        const isAdmin = admins.includes(user.uid);
        return { ...user, isAdmin };
      }
      return user;
    });
}

//제품의 대한 정보와 이미지URL을 받아오겠다
export async function addNewProduct(product, image) {
  const id = uuid();
  // 레퍼런스 결정해야하고 기존의 데이터베이스를 그대로 사용할거임
  // 데이터베이스 중에서도 products에 추가해줄거임
  // products 중에서도 id라는 key에 우리의 제품을 정보를 등록해줄거임
  // uuid로 고유한 아이디 받아와서 고유한 아이디 안에 제품의 정보 등록하기
  set(ref(database, `products/${id}`), {
    ...product,
    id,
    price: parseInt(product.price),
    image,
    options: product.options.split(","),
  });
}
