import axios from 'axios';
export {};

const URL: string =
  'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

axios.get(URL).then((response) => {
  let data: any; // any型は、なんでも入れらるので、検証とか一時的な対応で使うくらいにしましょう
  // let data: object[]; // 今回は配列にobjectが入っているので、object[]になる

  // 上記の書き方以外に、interfaceを使って具体的な型も作れる
  // 命名はキャメルケースで
  interface Article {
    id: number;
    title: string;
    description: string;
  }

  // let data: Article[]; // interfaceの使用は、他の型定義の型名と同じように記述する
  data = response.data;
  data = [
    // data の型がArticleであればエラーだが、anyなのでエラーでない
    {
      id: 1,
      description: 'description',
    },
  ];

  console.log(data);
});
