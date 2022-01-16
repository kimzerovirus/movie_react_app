import React from 'react';

//tyes
import { TmdbMovieInfos } from '../../api';

//style
import { Table } from './DetailData.style';

const DetailData = ({ data }: TmdbMovieInfos) => {
	// console.log(data);

	return (
		<>
			<Table className="container clfix">
				<p>{data.overview}</p>
				<h3>Movie Info</h3>
				<div className="tr">
					<div className="th">제목</div>
					<div className="td">{data.original_title}</div>
				</div>
				<div className="tr">
					<div className="th">개봉일</div>
					<div className="td">{data.release_date}</div>
				</div>
				<div className="tr">
					<div className="th">수익</div>
					<div className="td">$ {data.revenue}</div>
				</div>
				<div className="tr">
					<div className="th">상영시간</div>
					<div className="td">{data.runtime} 분</div>
				</div>
				<div className="tr">
					<div className="th">평점</div>
					<div className="td">{data.vote_average}</div>
				</div>
				<div className="tr">
					<div className="th">좋아요</div>
					<div className="td">{data.vote_count}</div>
				</div>
				<div className="tr">
					<div className="th">상태</div>
					<div className="td">{data.status}</div>
				</div>
				<div className="tr">
					<div className="th">인기</div>
					<div className="td">{data.popularity}</div>
				</div>
			</Table>
		</>
	);
};

export default DetailData;
