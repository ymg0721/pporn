import { GetServerSidePropsContext } from 'next'
import { Feed } from 'feed';

export const generateRssFeed = async (): Promise<string> => {
  //環境変数など任意のリンクをbaseUrlに入れる。
  const baseUrl ='localhost:3000'
  const feed = new Feed({
    title: '会社名',
    description:
      '概要',
    id:baseUrl,
    link:baseUrl,
    language: 'ja',
    copyright: 'copyright',
    generator: baseUrl,
  });

 //データをとってくる。API経由やファイル経由を想定
 const posts = await getPosts();
//各記事をフィードに追加
  posts.forEach((post) => {
    feed.addItem({
      title: post.title,
      description:post.description,
      date: new Date(post.date),
      id: post.url,
      link: post.url,
    });
  });
// Output: RSS 2.0
  return feed.rss2();

//今回はxmlの生成ですが、atomやjsonファイルでの生成も可能です。
//feed.atom1()でatomファイル生成
//feed.json1()でjsonのファイル生成
};