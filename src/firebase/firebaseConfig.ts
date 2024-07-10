// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"; //사용자 활동 추적 및 분석.
import { getAuth } from "firebase/auth";
// initializeApp 함수로 초기화된 Firebase 앱 객체를 인자로 받아 해댕 앱에 대한 Authentication 인스턴스 생성
// 이 인스턴스로 사용자 인증 및 관리 (로그인, 로그아웃, 회원가입, 비밀번호 재설정 등)

import { getFirestore, doc, setDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

//firebase 설정 객체g
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};
//위 객체에 처음에는 process.env.REACT_APP_를 붙이지 않아 트래킹하지 못하는 오류 발생.
//React에서 환경 변수는 모두 REACT_APP_ 접두사가 필요하기 때문이다.

// Firebase 앱 초기화 또는 기존 앱 가져오기
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);



export { app, auth, firestore, analytics };
