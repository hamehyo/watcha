// 누적관객 수
export const audienceNum = (audience) => {
    if( parseInt(audience) < 10000){
        if( audience.length <= 3){
            return `${audience}명`;
        }else{
            const result=  parseInt(audience/ 1000);
            const remainder = audience.substr(1);
            return `${result},${remainder}명`;
        }
    }else if(parseInt(audience) >= 10000){
        const result1=  parseInt(audience/ 10000);
        return `${result1}만명`;
    }
    return audience;
}