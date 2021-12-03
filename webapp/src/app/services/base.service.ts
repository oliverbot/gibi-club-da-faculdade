import { HttpClient, HttpHeaders, HttpEventType, HttpContext, HttpParams } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export default class BaseService {

	private current_env: any = "prod";

	protected http: any;

	protected httpClient: HttpClient;

	get domain(): string {
		return this.config[this.current_env].domain;
	}

	set domain(domain) {
		this.config[this.current_env].domain = domain;
	}

	get base(): string {
		return "http://localhost:8080";
	}

	set base(base) {
		this.config[this.current_env].base = base;
	}

	get uploadBase(): string {
		return this.config[this.current_env].uploadBase;
	}

	set uploadBase(uploadBase) {
		this.config[this.current_env].uploadBase = uploadBase;
	}

	get service(): string {
		return ""
	}

	set service(service) {
		this.config[this.current_env].service = service;
	}

	private config: any = {
		local: {
			domain: "http://localhost",
			base : "http://localhost:8127",
			uploadBase: "http://localhost:8127",
			service: ""
		},
		hml: {
			domain: "https://hmlapigateway-a.cers.com.br",
			base: "https://hmlapigateway-a.cers.com.br/api",
			uploadBase: "https://hmlapigateway-a.cers.com.br/zuul/api",
			service: ""
		},
		prod: {
			domain: "https://apigateway.aprenda.com.br",
			base: "http://localhost:8080",
			uploadBase: "https://apigateway.aprenda.com.br/zuul/api",
			service: ""
		},
		mig: {
			domain: "https://apigateway.aprenda.com.br",
			base: "https://apigateway.aprenda.com.br/api",
			uploadBase: "https://apigateway.aprenda.com.br/zuul/api",
			service: ""
		}
	}

	constructor(httpClient: HttpClient, env: String = new String()) {
		this.httpClient = httpClient;
		if(env)this.setEnv(env)
	}

	protected get(params: any) {
		params.method = "get";
		return this.request(params);
	}

	protected delete(params: any) {
		params.method = "delete";
		return this.request(params);
	}

	protected post(params: any) {
		params.method = "post";
		return this.request(params);
	}

	protected put(params: any) {
		params.method = "put";
		return this.request(params);
	}

	protected patch(params: any) {
		params.method = "patch";
		return this.request(params);
	}

	private request(params: any) {

		// Check if collection is filled with something
		if (params.collection) {
			let isList = params.collection.length != undefined;
			if (!isList || (isList && params.collection[0] != undefined)) {
				return of(params.collection);
			}
		}

		// Make the request
		const url: string = params.url ? params.url : `${this.base}${this.service}${params.path}`;

		if (["get", "delete"].includes(params.method)) {

			return this.httpClient["get"](url, Object.assign({ params: params.params }, params.headers ? { headers: params.headers } : {}));

		} else {

			const method: 'post' | 'put' | 'patch' = params.method;
			
			return this.httpClient[method](url, params.body, params.headers ? { headers: params.headers } : {});

		}
	}

	postFormData(path: any, formParams: any, headers?: any ): Observable<any> {
		const endpoint = `${this.uploadBase}${this.service}${path}`;
		const formData: FormData = new FormData();

		for (let paramName in formParams) {
			formData.append(paramName, formParams[paramName]);
		}

		return this.httpClient.post<any>(endpoint, formData, headers ? { headers, reportProgress: true, observe:'events' as 'body' } : {});
	}

	getReportData(path: any, headers: any) {
		const endpoint = `${this.uploadBase}${this.service}${path}`;

		return this.httpClient.get<Blob>(endpoint,{headers, responseType: 'blob' as 'json' } );
	}


	set_context(context  : string, env : string = this.current_env, customBasePath:string = ''): BaseService {
        this.service = context;

        this.setEnv(env);

		if (customBasePath) {
			this.base = customBasePath;
		}

		return this;
	}

	setLocalContext(context: any, customBasePath: string = ''): BaseService {

		let old_env = this.current_env;

		this.setEnv("local");

		this.service = context;

		if (customBasePath) {
			this.base = customBasePath;
		}

		this.setEnv(old_env);

		return this;
	}

	setHmlContext(context: any, customBasePath: string = ''): BaseService {

		let old_env = this.current_env;

		this.setEnv("hml");

		this.service = context;

		if (customBasePath) {
			this.base = customBasePath;
		}

		this.setEnv(old_env);

		return this;
	}

	setEnv(env: any) {
		this.current_env = env;
	}

	getEnv(){
		return this.current_env;
	}

	getDomain() {
		return this.getEnv() == "prod"
			? "https://aprenda.cers.com.br"
			: "https://hml.aprenda.com.br";
	}

}
