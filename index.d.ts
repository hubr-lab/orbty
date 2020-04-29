/* !
* orbty
* Copyright(c) 2020 Gleisson Mattos
* http://github.com/gleissonmattos
*
* Licensed under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
*/
import { urlencoded, json, raw, text } from "body-parser";
import serveStatic from "serve-static";
import http from "http";
import url from "url";

interface IEnvironment {
  [key: string]: string;
}

interface INext {
  (): void;
}

type ParamsArray = string[];

interface IParamsFormat {
  [key: string]: string;
}

interface ListenOptions {
  port?: number;
  host?: string;
  backlog?: number;
  path?: string;
  exclusive?: boolean;
  readableAll?: boolean;
  writableAll?: boolean;
  /**
   * @default false
   */
  ipv6Only?: boolean;
}

declare type ISender<ResponseBody = any, T = IResponse<ResponseBody>> = (responseContent?: ResponseBody) => T;
type RouteParams = IParamsFormat | ParamsArray;

declare interface IRequest<P extends RouteParams = IParamsFormat, IRequestBody = any, IRequestQuery = any> extends http.IncomingMessage {
  getUrlParser(): url.UrlWithParsedQuery;
  getCurrentIRequestTime(): number;
  initialTime: number;
  header(headerName: string): string | string[] | undefined;
  host: string;
  language: string;
  accept: string;
  agent: string;
  params: P;
  body: IRequestBody;
  query: IRequestQuery;
}

declare interface IResponse<ResponseBody = any> extends http.ServerResponse {
  status(code: number): this;
  json: ISender<ResponseBody>;
  plain: ISender<ResponseBody>;
  sendStatus(code: number | string): this;
  redirect(url: string): this;
  hasContentType(): boolean;
  send: ISender<ResponseBody>;
  error(error: Error): this;
  stream(filePath: string): this;
}

interface IHandler<P extends RouteParams = IParamsFormat, ResponseBody = any, IRequestBody = any, IRequestQuery = any> {
  (req: IRequest<P, IRequestBody, IRequestQuery>, res: IResponse<ResponseBody>, next: INext): any;
}

type IErrorHandler<P extends RouteParams = IParamsFormat, ResponseBody = any, IRequestBody = any, IRequestQuery = any> = (err: any, req: IRequest<P, IRequestBody, IRequestQuery>, res: IResponse<ResponseBody>, next: INext) => any;

type PathParams = string | RegExp | Array<string | RegExp>;

type IHandlerParams<P extends RouteParams = IParamsFormat, ResponseBody = any, IRequestBody = any, IRequestQuery = any>
  = IHandler<P, ResponseBody, IRequestBody>
  | IErrorHandler<P, ResponseBody, IRequestBody, IRequestQuery>
  | Array<IHandler<P>
  | IErrorHandler<P>>;

interface ICreateRouter<T> {
  <P extends RouteParams = IParamsFormat, ResponseBody = any, IRequestBody = any, IRequestQuery= any>(path: PathParams, ...handlers: Array<IHandler<P, ResponseBody, IRequestBody, IRequestQuery>>): T;
  <P extends RouteParams = IParamsFormat, ResponseBody = any, IRequestBody = any, IRequestQuery = any>(path: PathParams, ...handlers: Array<IHandlerParams<P, ResponseBody, IRequestBody, IRequestQuery>>): T;
  (path: PathParams, orbtyInstance: Orbty): T;
}

interface IRouterHandler<T> {
  (...handlers: IHandler[]): T;
  (...handlers: IHandlerParams[]): T;
}

declare class Router {
  get: ICreateRouter<this>;
  post: ICreateRouter<this>;
  put: ICreateRouter<this>;
  head: ICreateRouter<this>;
  move: ICreateRouter<this>;
  delete: ICreateRouter<this>;
  patch: ICreateRouter<this>;
  all: ICreateRouter<this>;
  options: ICreateRouter<this>;
  purge: ICreateRouter<this>;
  report: ICreateRouter<this>;
  "m-search": ICreateRouter<this>;
  notify: ICreateRouter<this>;
  checkout: ICreateRouter<this>;
  copy: ICreateRouter<this>;
  lock: ICreateRouter<this>;
  trace: ICreateRouter<this>;
  unlock: ICreateRouter<this>;
  unsubscribe: ICreateRouter<this>;
  merge: ICreateRouter<this>;
  mkactivity: ICreateRouter<this>;
  mkcol: ICreateRouter<this>;
  search: ICreateRouter<this>;
  subscribe: ICreateRouter<this>;
}

declare class Orbty extends Router {
  constructor ();

  static urlencoded: typeof urlencoded;
  static text: typeof text;
  static json: typeof json;
  static raw: typeof raw;
  static static: typeof serveStatic;
  static env: IEnvironment;
  static Request: IRequest;
  static Response: IResponse;

  error(handler: IErrorHandler): void;
  use: IRouterHandler<this> & ICreateRouter<this>;
  match(method: string, pathname: string): any;
  server(): (req: http.IncomingMessage, res: http.ServerResponse, ctx?: any) => void
  handler(req: http.IncomingMessage, res: http.ServerResponse, ctx?: any): void;

  listen(port?: number, hostname?: string, backlog?: number, listeningListener?: () => void): http.Server;
  listen(port?: number, hostname?: string, listeningListener?: () => void): http.Server;
  listen(port?: number, backlog?: number, listeningListener?: () => void): http.Server;
  listen(port?: number, listeningListener?: () => void): http.Server;
  listen(path: string, backlog?: number, listeningListener?: () => void): http.Server;
  listen(path: string, listeningListener?: () => void): http.Server;
  listen(options: ListenOptions, listeningListener?: () => void): http.Server;
  listen(handle: any, backlog?: number, listeningListener?: () => void): http.Server;
  listen(handle: any, listeningListener?: () => void): http.Server;
}

declare namespace Orbty {
  export interface Response extends IResponse {}
  export interface Request extends IRequest {
    context: any
  }

  export interface Environment extends IEnvironment {}
  export interface Next extends INext {}
  export interface ParamsFormat extends IParamsFormat {}
  export interface Sender extends ISender {}
  export interface Handler extends IHandler {}
  export interface ErrorHandler extends IErrorHandler {}
  export interface CreateRouter<T> extends ICreateRouter<T> {}
  export interface RouterHandler<T> extends IRouterHandler<T> {}

  export class HttpException {

    name: string;
    code: number;
    message: string;

    constructor(message: string, statusCode: number);
  }
}

export = Orbty;