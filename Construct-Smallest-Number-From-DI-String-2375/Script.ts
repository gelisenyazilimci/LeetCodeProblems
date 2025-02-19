//Time Complexity: O(2^n)
//Space Complexity: O(N)
function smallestNumber(pattern: string): string {
    const solver = new SmallestNumberSolver(pattern);
    return solver.solve();
}

class State { constructor(public path: number[], public used: boolean[]) {} }

class SmallestNumberSolver {
    private readonly pattern: string;
    private readonly totalDigits: number;
    private stack: State[];

    constructor(pattern: string) {
        this.pattern = pattern;
        this.totalDigits = pattern.length + 1;
        this.stack = [];
        const initialUsed = new Array(this.totalDigits + 1).fill(false);
        this.stack.push(new State([], initialUsed));
    }

    solve(): string {
        while (this.stack.length > 0) {
            const currentState: State = this.stack.pop()!;

            if (currentState.path.length === this.totalDigits) return currentState.path.join('');

            const nextDigits: number[] = this.generateNextDigits(currentState);

            for (const d of nextDigits) {
                const newPath: number[] = [...currentState.path, d];
                const newUsed: boolean[] = [...currentState.used];
                newUsed[d] = true;
                this.stack.push(new State(newPath, newUsed));
            }
        }

        return '';
    }

    private generateNextDigits(state: State): number[] {
        const nextDigits: number[] = [];
        const currentPathLength: number = state.path.length;

        for (let d: number = this.totalDigits; d >= 1; d--) {
            if (state.used[d]) continue;

            if (currentPathLength === 0) nextDigits.push(d); else {
                const lastDigit: number = state.path[currentPathLength - 1]; const patternChar: string = this.pattern[currentPathLength - 1];
                if ( (patternChar === 'I' && d > lastDigit) || (patternChar === 'D' && d < lastDigit) )  nextDigits.push(d);
            }
        }

        return nextDigits;
    }
}