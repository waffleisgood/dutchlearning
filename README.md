# Wafel Nederlands

와플과 함께 배우는 네덜란드어 (A1–A2). 90년대 웹 스타일 학습 사이트.

- 문법 레슨 12개, 레슨마다 연습문제 30개 + 채점
- 단어 트레이너: 동사 142개 뜻 · 현재완료 · 미래 연습
- de/het 연습기, 시제 변환기, Perfectum 퀴즈, 오답노트
- 모든 네덜란드어 예문 발음 듣기 (벨기에 네덜란드어 음성)

빌드 과정 없이 `index.html`만 열면 동작하는 정적 사이트예요.
발음 파일은 macOS에서 `python3 tools/make_audio.py`로 다시 만들 수 있어요.

글꼴: 둥근모꼴 (DungGeunMo).

## 로그인 · 피드백 (Firebase)
- `js/cloud.js`: 구글/이메일 로그인, 학습 기록 동기화, 피드백 보내기·읽기
- `js/firebase-config.js`: Firebase 설정값 (비어 있으면 이 기기에만 저장)
- `firestore.rules`: 보안 규칙 (학습 기록은 본인만, 피드백 읽기는 관리자만)
- 켜는 방법: `docs/firebase-setup.md`
- 관리자 피드백함: `#admin`

## 실생활 표현
- `js/data-phrases.js`: 학교(학부모-선생님) · 마트 장보기 표현과 식료품 이름. 페이지는 `#leven`
