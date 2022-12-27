import {DirectionClass} from "../../StartData/StartData";

export type Direction10DegreesMode = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
    | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20
    | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32
    | 33 | 34 | 35

export abstract class LightTrigo {

    static coordinateCoupleBy10DegreesStep0To350Degrees = [
        {x: 1, y: 0}, {x: 0.98481, y: 0.17365}, {x: 0.93969, y: 0.34202}, {x: 0.86603, y: 0.50000}, {
            x: 0.76604,
            y: 0.64279
        },
        {x: 0.64279, y: 0.76604}, {x: 0.50000, y: 0.86603}, {x: 0.34202, y: 0.93969}, {x: 0.17365, y: 0.98481}, {
            x: 0,
            y: 1
        },

        {x: -0.17365, y: 0.98481}, {x: -0.34202, y: 0.93969}, {x: -0.50000, y: 0.86603}, {x: -0.64279, y: 0.76604},
        {x: -0.76604, y: 0.64279}, {x: -0.86603, y: 0.50000}, {x: -0.93969, y: 0.34202}, {
            x: -0.98481,
            y: 0.17365
        }, {x: -1, y: 0},

        {x: -0.98481, y: -0.17365}, {x: -0.93969, y: -0.34202}, {x: -0.86603, y: -0.50000}, {x: -0.76604, y: -0.64279},
        {x: -0.64279, y: -0.76604}, {x: -0.50000, y: -0.86603}, {x: -0.34202, y: -0.93969}, {
            x: -0.17365,
            y: -0.98481
        }, {x: 0, y: -1},

        {x: 0.17365, y: -0.98481}, {x: 0.34202, y: -0.93969}, {x: 0.50000, y: -0.86603}, {x: 0.64279, y: -0.76604},
        {x: 0.76604, y: -0.64279}, {x: 0.86603, y: -0.50000}, {x: 0.93969, y: -0.34202}, {x: 0.98481, y: -0.17365}
    ]

    private static ratioYonXFrom0to80Degrees = [
        0,                      //  0 degree
        0.17632842883398828,    // 10 degrees
        0.3639710968510892,     // 20 degrees
        0.5773472050621803,     // 30 degrees
        0.8391076184011278,     // 40 degrees
        1.1917422486348574,     // 50 degrees
        1.73206,                // 60 degrees
        2.7474709081340274,     // 70 degrees
        5.6712352433054996,     // 80 degrees
    ]

    private static ratioYonXFrom100to180Degrees = [
        -5.6712352433054996,     // 100 degrees
        -2.7474709081340274,     // 110 degrees
        -1.73206,                // 120 degrees
        -1.1917422486348574,     // 130 degrees
        -0.8391076184011278,     // 140 degrees
        -0.5773472050621803,     // 150 degrees
        -0.3639710968510892,     // 160 degrees
        -0.17632842883398828,    // 170 degrees
        0,                       // 180 degree
    ]

    private static ratioAverageYonXFrom0to90Degrees = [
        0.08816421441699414,
        0.2701497628425387,
        0.47065915095663474,
        0.708227411731654,
        1.0154249335179926,
        1.4619011243174287,
        2.2397654540670136,
        4.209353075719763,
        7.83561762165275
    ]

    private static ratioAverageYonXFrom90to180Degrees = [
        -7.83561762165275,
        -4.209353075719763,
        -2.2397654540670136,
        -1.4619011243174287,
        -1.0154249335179926,
        -0.708227411731654,
        -0.47065915095663474,
        -0.2701497628425387,
        -0.08816421441699414
    ]

    private static getDirectionOfCloserTanAccordingRatioAverageFrom0to90Degrees(tan: number): 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 {
        if (tan < this.ratioAverageYonXFrom0to90Degrees[4]) {
            if (tan < this.ratioAverageYonXFrom0to90Degrees[2]) {
                if (tan < this.ratioAverageYonXFrom0to90Degrees[1]) {
                    if (tan < this.ratioAverageYonXFrom0to90Degrees[0]) {
                        return 0
                    } else {
                        return 1
                    }
                } else {
                    return 2
                }
            } else {
                if (tan < this.ratioAverageYonXFrom0to90Degrees[3]) {
                    return 3
                } else {
                    return 4
                }
            }
        } else {
            if (tan < this.ratioAverageYonXFrom0to90Degrees[6]) {
                if (tan < this.ratioAverageYonXFrom0to90Degrees[5]) {
                    return 5
                } else {
                    return 6
                }
            } else {
                if (tan < this.ratioAverageYonXFrom0to90Degrees[8]) {
                    if (tan < this.ratioAverageYonXFrom0to90Degrees[7]) {
                        return 7
                    } else {
                        return 8
                    }
                } else {
                    return 9
                }
            }
        }
    }

    static getDirectionIn10degreesModeAccordingXYPointToReach(x: number, y: number): number {

        const tan = Math.abs(y / x)
        if (x < 0) {
            if (y < 0) {
                const absDirection =
                    LightTrigo.getDirectionOfCloserTanAccordingRatioAverageFrom0to90Degrees(tan)
                return absDirection + 18
            } else {
                const absDirection =
                    LightTrigo.getDirectionOfCloserTanAccordingRatioAverageFrom0to90Degrees(tan)
                return absDirection + 9
            }
        } else {
            if (y < 0) {
                const absDirection =
                    LightTrigo.getDirectionOfCloserTanAccordingRatioAverageFrom0to90Degrees(tan)
                const newDirection = absDirection + 27
                if (newDirection === 36) {
                    return 0
                } else {
                    return newDirection
                }
            } else {
                return LightTrigo.getDirectionOfCloserTanAccordingRatioAverageFrom0to90Degrees(tan)
            }
        }

    }

    static add10DegreesToDirection(direction: DirectionClass) {
        new DirectionClass(0, 0, 0)
    }

    // -------
    // Tools :
    // -------

    static getAllXYBy10degreesAngle() {
        const Couples: { x: string, y: string, angle: string }[] = []
        for (let i = 0; i < 36; i++) {
            const angle = i * 10
            const radian = angle * Math.PI / 180
            const x = Math.sqrt((1 / (1 + (Math.tan(radian) * Math.tan(radian)))))
            const y = Math.tan(radian) * x
            Couples.push({x: x.toPrecision(5), y: y.toPrecision(5), angle: angle.toString()})
        }
        return {Couples}
    }

    static getTangentValuesFromCoordinateCoupleArray = (coordinateCoupleArray: { x: number, y: number }[]) => {
        const arrays: number[] = []
        let bufferRatio = 0
        for (let i = 0; i < 10; i++) {
            const x = coordinateCoupleArray[i].x;
            const y = coordinateCoupleArray[i].y;
            const ratio = () => {
                if (x !== 0) return (y / x)
                else return 10
            }
            if (i > 0) {
                arrays.push((bufferRatio + ratio()) / 2)
            }
            bufferRatio = ratio()
        }
        return arrays
    }

}
