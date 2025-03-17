class Player {

    nickname: string;
    image: string;
    country: string;
    overall: number;
    form: number;
    entry: number;
    clutch: number;
    aim: number;

    constructor(nickname: string, image: string, country: string, form: number, entry: number, clutch: number, aim: number) {
        this.nickname = nickname;
        this.image = image;
        this.country = country;
        this.form = form;
        this.entry = entry;
        this.clutch = clutch;
        this.aim = aim;
        this.overall = Math.floor((form + entry + clutch + aim) / 4);
    }

    public getNickname(): string {
        return this.nickname;
    }

    public getImage(): string {
        return this.image;
    }

    public getCountry(): string {
        return this.country;
    }

    public getForm(): number {
        return this.form;
    }

    public getEntry(): number {
        return this.entry;
    }

    public getClutch(): number {
        return this.clutch;
    }

    public getAim(): number {
        return this.aim;
    }

}

export default Player;