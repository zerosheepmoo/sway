import React from 'react';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const Notice = () =>
(<Paper sx={{ padding: 5 }}>
    
    <Typography variant="h4" role="h3" color="primary" sx={{ paddingBottom: 3 }}>엑셀파일로 변환하기</Typography>
    <Typography variant="body1" sx={{ paddingBottom: 2 }}>
        <Link href="https://www.convertcsv.com/json-to-csv.htm">
            {'JSON 파일을 csv, excel 파일로 바꿔주는 사이트'}
        </Link>
    </Typography>
    <Typography sx={{ paddingBottom: 2 }}>
        를 이용하여 텍스트로 저장하기 한 파일을 엑셀처럼 만들 수 있습니다.
    </Typography>
    <Typography>
        전체일지 삭제하기를 한 뒤 저장해야 결과물이 반영됩니다.
    </Typography>
    <Typography sx={{ paddingBottom: 4 }}>
        전체일지 삭제하기 한 뒤 새로고침하면 실행했던 결과를 취소할 수 있습니다
    </Typography>

    <Typography variant="h4" role="h3" color="primary" sx={{ paddingBottom: 3 }}>주의사항</Typography>
    <Typography variant="body1" sx={{ paddingBottom: 2 }}>
        SWAY는 <Link href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage">localStorage</Link> 기술을 사용합니다. 보안에 민감한 정보들은 되도록 기입하지 않기를 권장합니다.
    </Typography>
    <Typography variant="body1" sx={{ paddingBottom: 2 }}>
        이 앱의 제작자는 이 앱을 사용해서 발생한 피해에 대해서 어떠한 책임도 지지 않습니다.
    </Typography>
</Paper>
)

export default Notice
