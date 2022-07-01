# priority-matrix

## Features

![Features Priority Image](https://user-images.githubusercontent.com/17308201/176801935-209e0395-a85c-498c-8af5-2a7335520e2b.png)


重要

- high：提供这个功能将活动商业上的成功，给用户提供数量级以上的收益。
- medium：行业标准功能。
- low：或许一部分用户会感到开心，不影响大部分用户使用，不影响核心使用场景。

紧急

- high：对公司短期收益有影响，客户会解约。
- medium：对公司短期收益有影响，新增客户会暂缓。
- low：对公司短期收益没有影响。

result

- 重要high + 紧急high  = do
  - 新功能将为客户带来数量级以上的收益，并且如果没有客户就会解约，那么我们肯定要做。
- 重要high + 紧急medium = do
  - 给用户提供数量级以上的收益，即使对公司短期收益没有影响，我们也应该做。
- 重要high + 紧急low = plan
  - 新功能将为客户带来数量级以上的收益，但是对公司短期收益没有影响，我们可以计划一下对应时期。
- 重要medium + 紧急high = do
  - 新功能是行业标准功能，没有的话客户会解约，那么也需要做。
- 重要medium + 紧急medium = plan
  - 行业标准功能，但是对公司短期收益没有影响，我们可以计划一下对应时期。
- 重要medium + 紧急low  = plan
  -  行业标准功能，但是对公司短期收益没有影响，我们可以计划一下对应时期。
- 重要low +  紧急high = don't
  - 新功能或许会让一部分用户感到开心，但是不影响核心使用场景，即使客户威胁会解约，我们也不应该做。
- 重要low + 紧急medium= don't
  - 新功能或许会让一部分用户感到开心，但是不影响核心使用场景，我们应该不做。
-  重要low + 紧急low = don't
   - 新功能或许会让一部分用户感到开心，但是不影响核心使用场景，我们应该不做。


## Bugs

![Bug Priority Image](https://user-images.githubusercontent.com/17308201/176431567-4ac4e1b2-2e04-48e3-b112-f3d740c763b3.png)