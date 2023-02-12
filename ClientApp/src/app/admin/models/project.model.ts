export class Project {
    projectId: number;
    projectName: string;
    dateOfStart !: Date;
    teamSize: number;

    constructor()
    {
        this.projectId = 0;
        this.projectName = '';
        this.dateOfStart = new Date();
        this.teamSize = 0;
    }
}
