import React from 'react'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'

const Notice = () => 
        (<Paper sx={{padding: 5}}>
            <Link href="https://www.convertcsv.com/json-to-csv.htm">
                {'JSON 파일을 csv, excel 파일로 바꿔주는 사이트'}
            </Link>
            <p>를 이용하여 텍스트로 저장하기 한 파일을 엑셀처럼 만들 수 있습니다.</p>
            <p>전체일지 삭제하기를 한 뒤 저장해야 결과물이 반영됩니다. <br/>전체일지 삭제하기 한 뒤 새로고침하면 실행했던 결과를 취소할 수 있습니다.</p>
        </Paper>
    )

export default Notice
