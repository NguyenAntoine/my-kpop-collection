import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { Injectable, Injector } from "@angular/core";

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
    constructor(private injector: Injector) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req)
            .pipe(catchError(err => this.handleError(err)));
    }

    handleError(error: HttpErrorResponse): Observable<any> {
        // const snackBar = this.injector.get(NotificationService);
        const errorMessage = error.error.message ? error.error.message : $localize`:@@errorMessage:Veuillez contacter l'administrateur.`;
        // snackBar.showError($localize`:@@errorProblem:Un problème est survenu : ` + errorMessage);
        console.log(`Status: ${error.status}; Message: ${error.message}`);
        return throwError(error);
    }
}
