概要
====

express をテストするために supertest を利用します。
supertest は request() に指定できるパラメータとして express のオブジェクトまたは URL を指定できます。


- request() に express オブジェクトを指定した場合  
 テストするプロセスと express の http サーバーは同プロセスとなります。このため mock-fs などのモックが利用できます。  
 コードは expess-obj ディレクトリにあります。app.js が express のコードで test.js がテストコードです。  
 テストコードの 'using mock-fs' では mock-fs を利用したテストを記述しています。  
 テスト実行方法は ```npm test``` です。

- request() に express オブジェクトを指定する場合  
 テストするためにあらかじめ express サーバーを起動する必要があります。  
 このため、express サーバーとテストプロセスが異なります。このため mock-fs などのモックが利用できません。  
 コードは url ディレクトリにあります。  
 上記 express-obj とほとんど同じコードですが、テストコードの 'using mock-fs' が失敗します。  
 異なるところは app.js で express サーバーを listen して起動しているところです。  
 テスト実行方法
 はじめに ```node app.js``` で express サーバーを起動しておきます。続いて ```npm test``` でテストを実行します。（テストに失敗します）
