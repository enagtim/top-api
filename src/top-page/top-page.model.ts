export enum TopLevelCategory {
	Courese,
	Services,
	Books,
	Products,
}
export class TopPageModel {
	firstLevelCategory: TopLevelCategory;
	secondCategory: string;
	title: string;
	category: string;
	hh?: {
		count: number;
		juniorSalary: string;
		middleSalary: string;
		seniorSalary: number;
	};
	advantages: {
		title: string;
		description: string;
	}[];
	seoText: string;
	tagsTitle: string;
	tags: string[];
}
