with open('./../assets/input', encoding='utf-8') as f:
    report = list(map(lambda row: int(row.strip()), f.readlines()))

    combinationsPt1 = []

    for input1 in report:
        for input2 in report:
            if input1 != input2:
                combinationsPt1.append([input1, input2])

    positionPt1 = [item for item in combinationsPt1 if item[0] + item[1] == 2020].pop()

    print(positionPt1[0] * positionPt1[1])

    # Part 2

    combinationsPt2 = []

    # Find better algorithm, that doesn't require changing code and adding loops
    for input1 in report:
        for input2 in report:
            if input1 != input2:
                for input3 in report:
                    if input2 != input3 and input1 != input3:
                        combinationsPt2.append([input1, input2, input3])

    positionPt2 = [item for item in combinationsPt2 if item[0] + item[1] + item[2] == 2020].pop()

    print(positionPt2[0] * positionPt2[1] * positionPt2[2])
