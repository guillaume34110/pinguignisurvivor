export type Direction10DegreesMode = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
    | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20
    | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32
    | 33 | 34 | 35

const ratioAverageYonXFrom0to90Degrees = [
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

function getDirectionOfCloserTanAccordingRatioAverageFrom0to90Degrees(tan: number): 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 {
        if (tan < ratioAverageYonXFrom0to90Degrees[4]) {
            if (tan < ratioAverageYonXFrom0to90Degrees[2]) {
                if (tan < ratioAverageYonXFrom0to90Degrees[1]) {
                    if (tan < ratioAverageYonXFrom0to90Degrees[0]) {
                        return 0
                    } else {
                        return 1
                    }
                } else {
                    return 2
                }
            } else {
                if (tan < ratioAverageYonXFrom0to90Degrees[3]) {
                    return 3
                } else {
                    return 4
                }
            }
        } else {
            if (tan < ratioAverageYonXFrom0to90Degrees[6]) {
                if (tan < ratioAverageYonXFrom0to90Degrees[5]) {
                    return 5
                } else {
                    return 6
                }
            } else {
                if (tan < ratioAverageYonXFrom0to90Degrees[8]) {
                    if (tan < ratioAverageYonXFrom0to90Degrees[7]) {
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

export const LightTrigonometry = {

    coordinateCoupleBy10DegreesStep0To350Degrees: [
        { x: 1, y: 0 }, { x: 0.98481, y: 0.17365 }, { x: 0.93969, y: 0.34202 }, { x: 0.86603, y: 0.50000 }, {
            x: 0.76604,
            y: 0.64279
        },
        { x: 0.64279, y: 0.76604 }, { x: 0.50000, y: 0.86603 }, { x: 0.34202, y: 0.93969 }, { x: 0.17365, y: 0.98481 }, {
            x: 0,
            y: 1
        },

        { x: -0.17365, y: 0.98481 }, { x: -0.34202, y: 0.93969 }, { x: -0.50000, y: 0.86603 }, { x: -0.64279, y: 0.76604 },
        { x: -0.76604, y: 0.64279 }, { x: -0.86603, y: 0.50000 }, { x: -0.93969, y: 0.34202 }, {
            x: -0.98481,
            y: 0.17365
        }, { x: -1, y: 0 },

        { x: -0.98481, y: -0.17365 }, { x: -0.93969, y: -0.34202 }, { x: -0.86603, y: -0.50000 }, { x: -0.76604, y: -0.64279 },
        { x: -0.64279, y: -0.76604 }, { x: -0.50000, y: -0.86603 }, { x: -0.34202, y: -0.93969 }, {
            x: -0.17365,
            y: -0.98481
        }, { x: 0, y: -1 },

        { x: 0.17365, y: -0.98481 }, { x: 0.34202, y: -0.93969 }, { x: 0.50000, y: -0.86603 }, { x: 0.64279, y: -0.76604 },
        { x: 0.76604, y: -0.64279 }, { x: 0.86603, y: -0.50000 }, { x: 0.93969, y: -0.34202 }, { x: 0.98481, y: -0.17365 }
    ],

    getDirectionIn10degreesModeAccordingXYPointToReach(x: number, y: number): number {

        let tan = y / x
        if (tan < 0) tan *= -1

        if (x < 0) {
            if (y < 0) {
                const absDirection =
                    getDirectionOfCloserTanAccordingRatioAverageFrom0to90Degrees(tan)
                return absDirection + 18
            } else {
                const absDirection =
                    getDirectionOfCloserTanAccordingRatioAverageFrom0to90Degrees(tan)
                return absDirection + 9
            }
        } else {
            if (y < 0) {
                const absDirection =
                    getDirectionOfCloserTanAccordingRatioAverageFrom0to90Degrees(tan)
                const newDirection = absDirection + 27
                if (newDirection === 36) {
                    return 0
                } else {
                    return newDirection
                }
            } else {
                return getDirectionOfCloserTanAccordingRatioAverageFrom0to90Degrees(tan)
            }
        }

    },

}
