import {Injectable} from "@nestjs/common";

@Injectable()
export class AppService {
    check() {
        return 1;
    }
}