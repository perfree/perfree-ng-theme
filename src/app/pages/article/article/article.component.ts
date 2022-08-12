import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpUtil } from 'src/app/core/common/http-util';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  article: any;
  constructor(
    private route:ActivatedRoute,
    private httpUtil: HttpUtil
    ) { }

  ngOnInit(): void {
    this.httpUtil.get('/api/article/getArticleById?articleId=' + this.route.snapshot.paramMap.get('id')).then((res: any) => {
      console.log(res);
      if(res.code === 200) {
        this.article = res.data;
      }
    });
  }

}
