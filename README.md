# 概要
Swagger（OpenAPI）仕様のAPI開発を行うための環境。  

下記の機能がある。  

* APIドキュメントを作成、編集
* APIドキュメントをブラウザ表示
* APIドキュメントを静的HTMLで出力
* APIモックサーバ

# 環境構築
### このプロジェクトをclone
ローカルマシンの任意のディレクトリに、このプロジェクトをgit cloneする。  

### コンテナ起動
cloneしたプロジェクトのディレクトリに移動し、下記コマンドを実行。  
`docker-compose up -d`

これで、SwaggerUIによるドキュメント表示、ReDocによるドキュメント表示、APISproutによるモックサーバーが利用可能。  

# APIドキュメントの作成、編集
/openapi/index.yamlにAPI仕様を記述する。（サンプルAPI記述済み）   
このファイルを編集すればSwaggerUI、ReDocで表示確認可能。  

また、yamlの一部を別ファイルに切り出して記述することも可能。  
サンプルドキュメントでは、infoの記述を別ファイルで読み込んでいる状態。  
同じように各pathやcomponentも別ファイルで記述可能。  
各ファイルの変更を検知して自動でmerged.yamlに結合されるようになっている。  

merged.yamlは結合結果のファイルなので、このファイルを直接編集しないこと。  

# APIドキュメントをブラウザ表示
UIは、SwaggerUIとReDocの両方で表示可能なので、好みの方を利用する。  
SwaggerUI `http://localhost:8011`  
ReDoc `http://localhost:8012`  

ホストPCでyamlファイルを編集後、ブラウザリロードで画面に反映される。  

# APIドキュメントを静的HTMLで出力
本プロジェクトのルートディレクトリで、下記コマンドを実行し静的HTMLを出力可能。  
`docker-compose run --rm redoc-cli bundle merged.yaml -o merged.html`  

/openapi/merged.htmlというファイルが出力されるので、それをそのままブラウザで表示可能。  
単一のhtmlファイルのみで、他のcssやjsファイルに依存していないため、  
1枚のhtmlファイルのみでAPIドキュメントとして配布可能。  

# APIモックサーバ
APIモックはAPISproutを使用。  

`http://localhost:8010`でモックAPIにリクエスト可能。  
（GET）`http://localhost:8010/pets` にリクエストすれば、サンプルAPIドキュメントのレスポンスを確認可能。  

リクエストヘッダーに `Prefer: status=409` のように記述することで特定のレスポンスを取得可能。  
サンプルAPIドキュメントの場合、`Prefer: status=default`と記述すればエラーレスポンスが返却される。  

※OpenAPI3の動作は確認済みだがOpenAPI2は未確認なので、3を推奨  
