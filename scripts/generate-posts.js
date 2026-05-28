const fs = require('fs');
const path = require('path');

// 1. 포스트 저장할 폴더 생성 (posts)
const postsDir = path.join(__dirname, '..', 'posts');
if (!fs.existsSync(postsDir)) {
  fs.mkdirSync(postsDir, { recursive: true });
}

// 2. 오늘 날짜 기준으로 파일 이름 생성
const todayStr = new Date().toISOString().split('T')[0];
const fileName = `ali-deal-${todayStr}.md`;
const filePath = path.join(postsDir, fileName);

// 3. 마크다운 글 콘텐츠 작성
const content = `# [오늘의 추천] 알리익스프레스 가성비 초특가 핫딜 상품 모음

> **작성일자:** ${todayStr}

자동 수집 스크립트(scripts/generate-posts.js)를 통해 자동으로 생성된 해외 직구 가성비 상품 추천 글입니다.

## 추천 상품 목록

### 1. 초고속 무선 충전 보조배터리 20000mAh
- **가격:** $15.99
- **평점:** 4.8 / 5.0
- **리뷰 요약:** 대용량에 충전 속도가 빠르고 마감이 깔끔합니다.

### 2. 가성비 기계식 키보드 (적축/갈축)
- **가격:** $24.50
- **평점:** 4.7 / 5.0
- **리뷰 요약:** 이 가격대에서 보기 힘든 타건감과 백라이트 모드를 지원합니다.

---

*본 포스팅은 알리익스프레스 어필리에이트 활동의 일환으로, 이에 따른 일정액의 수수료를 제공받을 수 있습니다.*
`;

// 4. 파일 쓰기
try {
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`[성공] 블로그 포스트 생성 완료: posts/${fileName}`);
} catch (error) {
  console.error('[오류] 포스트 생성 중 문제가 발생했습니다:', error);
  process.exit(1);
}
