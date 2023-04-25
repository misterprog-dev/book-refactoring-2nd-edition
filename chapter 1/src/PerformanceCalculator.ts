export class PerformanceCalculator {
    aPerformance: any;
    aPlay: any;

    constructor(aPerformance: any, aPlay: any) {
        this.aPerformance = aPerformance;
        this.aPlay = aPlay;
    }

    get amount(): number {
        throw new Error('subclass responsability');
    }

    get volumeCredits(): number {
        return Math.max(this.aPerformance.audience - 30, 0);
    }
}