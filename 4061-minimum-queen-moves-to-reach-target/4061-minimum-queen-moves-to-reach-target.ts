function minQueenMoves(source: number[], target: number[]): number {
    let si=source[0], sj=source[1]
    let ti=target[0], tj=target[1]
    if(si==ti && sj==tj) return 0
    else if(si==ti || sj==tj || Math.abs(si-ti)==Math.abs(sj-tj)) return 1
    else return 2
};