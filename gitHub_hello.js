import http from 'k6/http';
import { sleep } from 'k6';

//export const options = {
//  vus: 1, // 表示10個虛擬使用者
//  duration: '10s', // 測試持續時間10秒
//  summaryTimeUnit: 'ms'
//}

export default function () {
  http.get('https://test.k6.io');
  sleep(1);
}

