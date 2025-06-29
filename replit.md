# 나만 고양이 없어? 내 마음 속 고양이 찾기 심리테스트

## 프로젝트 개요
Korean-language psychological test web application that matches users with their "inner cat" personality type. 

클라이언트 전용 React 애플리케이션으로 한국어/영어 이중 언어를 지원하고 다크모드 기능을 제공합니다.

## 최근 변경사항 (2025-06-29)
✓ 서버 로직 완전 제거 - 클라이언트 전용 애플리케이션으로 변경
✓ 한국어/영어 이중 언어 지원 (우상단 언어 전환 버튼)
✓ 라이트/다크 모드 전환 기능 (우상단 달/해 아이콘)
✓ 12개 질문의 심리테스트 (양 언어 버전)
✓ 6가지 고양이 성격 유형 결과
✓ 부드러운 애니메이션과 반응형 디자인
✓ 결과 공유 기능
✓ 정적 파일 배포 가능한 구조로 변경

## 프로젝트 구조
```
/
├── src/
│   ├── components/          # UI 컴포넌트
│   │   ├── ui/             # shadcn/ui 컴포넌트
│   │   ├── WelcomeScreen.tsx
│   │   ├── QuestionScreen.tsx
│   │   ├── LoadingScreen.tsx
│   │   ├── ResultScreen.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── LanguageToggle.tsx
│   ├── contexts/           # React 컨텍스트
│   │   ├── ThemeContext.tsx
│   │   └── LanguageContext.tsx
│   ├── data/              # 데이터 파일
│   │   ├── questions.ts    # 한국어 질문
│   │   ├── questionsEn.ts  # 영어 질문
│   │   ├── catTypes.ts     # 한국어 고양이 유형
│   │   └── catTypesEn.ts   # 영어 고양이 유형
│   ├── pages/             # 페이지 컴포넌트
│   │   ├── CatTest.tsx
│   │   └── not-found.tsx
│   ├── lib/               # 유틸리티
│   │   └── utils.ts
│   ├── App.tsx            # 메인 앱 컴포넌트
│   ├── main.tsx           # 앱 진입점
│   └── index.css          # 글로벌 스타일
├── index.html             # HTML 템플릿
├── package.json           # 의존성 설정
├── vite.config.ts         # Vite 설정
└── tailwind.config.ts     # Tailwind CSS 설정
```

## 기술 스택
- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui
- **Animation**: Framer Motion
- **Build Tool**: Vite
- **Router**: Wouter
- **Icons**: Lucide React

## 개발 서버 실행
```bash
npx vite --host 0.0.0.0 --port 5000
```

## 빌드 및 배포
```bash
npm run build
```
정적 파일이 `dist/` 폴더에 생성되어 어떤 정적 호스팅 서비스에서도 배포 가능합니다.

## 주요 기능
1. **다국어 지원**: 한국어/영어 실시간 전환
2. **테마 전환**: 라이트/다크 모드 지원
3. **심리테스트**: 12개 질문으로 고양이 성격 분석
4. **결과 공유**: 웹 공유 API 또는 클립보드 복사
5. **반응형 디자인**: 모바일 최적화

## 사용자 선호사항
- 클라이언트 전용 애플리케이션 선호
- 서버 로직 없이 정적 배포 가능한 구조 요구
- 한국어 우선, 영어 지원 필요