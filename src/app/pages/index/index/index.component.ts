import { Component, OnInit } from '@angular/core';
import { HttpUtil } from 'src/app/core/common/http-util';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  pager = {
    total: 0,
    pageIndex: 1,
    pageSize: 2,
    pageSizeOptions: [2, 20, 30, 40, 50]
  };

  artilceList:any[] = [];

  constructor(private httpUtil: HttpUtil) { }

  ngOnInit(): void {
    this.getArticleList();
  }

  getArticleList(): void {
    this.httpUtil.get('/api/article/list?pageIndex=' + this.pager.pageIndex + '&&pageSize=' + this.pager.pageSize).then((res: any) => {
      console.log(res);
      if (res.code === 200) {
        this.pager.total = res.total;
        console.log(res.data);
        this.artilceList = res.data;
      }
    });
  }

  pageIndexChange(pageIndex: any) {
    this.getArticleList();
  }

  pageSizeChange(pageSize: any) {
    this.pager.pageIndex = 1;
    this.getArticleList();
  }
}
