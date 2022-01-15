import React from 'react';

const DetailData = (props: any) => {
	const { movie } = props;
	//console.log(movie)

	return (
		<div>
			<section className="table clfix">
				<h3>Movie Info</h3>
				<div className="tr clfix">
					<div className="th">제목</div>
					<div className="td">{movie.original_title}</div>
				</div>
				<div className="tr clfix">
					<div className="th">개봉일</div>
					<div className="td">{movie.release_date}</div>
				</div>
				<div className="tr clfix">
					<div className="th">수익</div>
					<div className="td">$ {movie.revenue}</div>
				</div>
				<div className="tr clfix">
					<div className="th">상영시간</div>
					<div className="td">{movie.runtime} 분</div>
				</div>
				<div className="tr clfix">
					<div className="th">평점</div>
					<div className="td">{movie.vote_average}</div>
				</div>
				<div className="tr clfix">
					<div className="th">좋아요</div>
					<div className="td">{movie.vote_count}</div>
				</div>
				<div className="tr clfix">
					<div className="th">상태</div>
					<div className="td">{movie.status}</div>
				</div>
				<div className="tr clfix">
					<div className="th">인기</div>
					<div className="td">{movie.popularity}</div>
				</div>
			</section>
		</div>
	);
};

export default DetailData;
