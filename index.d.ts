/* !
* orbty
* Copyright(c) 2020 Gleisson Mattos
* http://github.com/gleissonmattos
*
* Licensed under the MIT license.
* http://www.opensource.org/licenses/mit-license.php
*/
import { urlencoded, json, raw, text } from "body-parser";
import serveStatic = require("serve-static");
import http from "http";
import url from "url";

interface Environment {
  [key: string]: string;
}

interface Next {
  (): void;
}

type ParamsArray = string[];

interface ParamsFormat {
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

declare type Sender<ResponseBody = any, T = Response<ResponseBody>> = (responseContent?: ResponseBody) => T;
type RouteParams = ParamsFormat | ParamsArray;

declare class HttpException {

  name: string;
  code: number;
  message: string;

  constructor(message: string, statusCode: number);
}

declare class Request<P extends RouteParams = ParamsFormat, RequestBody = any, RequestQuery = any> extends http.IncomingMessage {
  getUrlParser(): url.UrlWithParsedQuery;
  getCurrentRequestTime(): number;
  initialTime: number;
  header(headerName: string): string | string[] | undefined;
  host: string;
  language: string;
  accept: string;
  agent: string;
  params: P;
  body: RequestBody;
  query: RequestQuery;
}

declare class Response<ResponseBody = any> extends http.ServerResponse {
  status(code: number): this;
  json: Sender<ResponseBody>;
  plain: Sender<ResponseBody>;
  sendStatus(code: number | string): this;
  redirect(url: string): this;
  hasContentType(): boolean;
  send: Sender<ResponseBody>;
  error(error: Error): this;
  stream(filePath: string): this;
}

interface Handler<P extends RouteParams = ParamsFormat, ResponseBody = any, RequestBody = any, RequestQuery = any> {
  (req: Request<P, RequestBody, RequestQuery>, res: Response<ResponseBody>, next: Next): any;
}

type ErrorHandler<P extends RouteParams = ParamsFormat, ResponseBody = any, RequestBody = any, RequestQuery = any> = (err: any, req: Request<P, RequestBody, RequestQuery>, res: Response<ResponseBody>, next: Next) => any;

type PathParams = string | RegExp | Array<string | RegExp>;

type HandlerParams<P extends RouteParams = ParamsFormat, ResponseBody = any, RequestBody = any, RequestQuery = any>
  = Handler<P, ResponseBody, RequestBody>
  | ErrorHandler<P, ResponseBody, RequestBody, RequestQuery>
  | Array<Handler<P>
  | ErrorHandler<P>>;

interface CreateRouter<T> {
  <P extends RouteParams = ParamsFormat, ResponseBody = any, RequestBody = any, RequestQuery= any>(path: PathParams, ...handlers: Array<Handler<P, ResponseBody, RequestBody, RequestQuery>>): T;
  <P extends RouteParams = ParamsFormat, ResponseBody = any, RequestBody = any, RequestQuery = any>(path: PathParams, ...handlers: Array<HandlerParams<P, ResponseBody, RequestBody, RequestQuery>>): T;
  (path: PathParams, orbtyInstance: Orbty): T;
}

interface RouterHandler<T> {
  (...handlers: Handler[]): T;
  (...handlers: HandlerParams[]): T;
}

declare class Router {
  get: CreateRouter<this>;
  post: CreateRouter<this>;
  put: CreateRouter<this>;
  head: CreateRouter<this>;
  move: CreateRouter<this>;
  delete: CreateRouter<this>;
  patch: CreateRouter<this>;
  all: CreateRouter<this>;
  options: CreateRouter<this>;
  purge: CreateRouter<this>;
  report: CreateRouter<this>;
  "m-search": CreateRouter<this>;
  notify: CreateRouter<this>;
  checkout: CreateRouter<this>;
  copy: CreateRouter<this>;
  lock: CreateRouter<this>;
  trace: CreateRouter<this>;
  unlock: CreateRouter<this>;
  unsubscribe: CreateRouter<this>;
  merge: CreateRouter<this>;
  mkactivity: CreateRouter<this>;
  mkcol: CreateRouter<this>;
  search: CreateRouter<this>;
  subscribe: CreateRouter<this>;
}

declare class Orbty extends Router {
  constructor ();

  static urlencoded: typeof urlencoded;
  static text: typeof text;
  static json: typeof json;
  static raw: typeof raw;
  static static: typeof serveStatic;
  static env: Environment;
  static Request: Request;
  static Response: Response;
  static HttpException: HttpException;

  error(handler: ErrorHandler): void;
  use: RouterHandler<this> & CreateRouter<this>;
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

export = Orbty;