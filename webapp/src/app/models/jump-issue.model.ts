export default class JumpIssue {

    issueNumber: Number;

    description: String;

    coverImageUrl: String;

    coverDate: String;

    createdAt: Date;

    constructor(issueNumber: Number = new Number(),
                description: String = new String(),
                coverImageUrl: String = new String(),
                coverDate: String = new String(),
                createdAt: Date = new Date()) {
        this.issueNumber = issueNumber;
        this.description = description;
        this.coverImageUrl = coverImageUrl;
        this.coverDate = coverDate;
        this.createdAt = createdAt;
    }
	
}
