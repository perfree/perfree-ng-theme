import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
/**
 * Http工具类封装
 * @author Yin Peng Fei
 */
@Injectable()
export class HttpUtil {

  constructor(
    private http: HttpClient
  ) {
  }

  pipGet(url: string) {
    return this.http.get(url).pipe();
  }

  pipPost(url: string, param?: any) {
    return this.http.post(url, param).pipe();
  }

  /**
   * Get请求
   * @param url 请求的url
   */
  get(url: string) {
    return this.http.get(url).toPromise().then((data: any) => {
      return data;
    }).catch(this.handleError);
  }

  /**
   * Post请求
   * @param url 请求的url
   * @param param 请求参数
   */
  post(url: string, param?: any) {
    return this.http.post(url, param).toPromise().then((data: any) => {
      return data;
    }).catch(this.handleError);
  }

  /**
   * delete请求
   * @param url 连接
   */
  delete(url: string) {
    return this.http.delete(url).toPromise().then((data: any) => {
      return data;
    }).catch(this.handleError);
  }


  /**
   * Put请求
   * @param url 请求的url
   * @param param 请求参数
   */
  put(url: string, param?: any) {
    return this.http.put(url, param).toPromise().then((data: any) => {
      return data;
    }).catch(this.handleError);
  }

  /**
   * Http请求错误处理
   * @param error 错误信息
   */
  private handleError(error: Response | any) {
    // Http请求错误处理
    if (error instanceof Response) {
      console.log(error);
    } else {
    }
  }

  private getHeader() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json;charset=utf-8',
        Authorization: environment.LOCAL_STORAGE_NAME
      })
    };
    return httpOptions;
  }
}