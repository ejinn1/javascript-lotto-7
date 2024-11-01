# 로또

# 기능 목록

## 구입 금액 입력

로또 구입 금액을 입력받고 `예외 처리`한다.

- [ ] 숫자가 아니면 `[ERROR]`를 발생시킨다.
- [ ] 양수가 아니면 `[ERROR]`를 발생시킨다.
- [ ] 1000원으로 나누어 떨어지 않으면 `[ERROR]`를 발생시킨다.

## 로또 목록 출력

구입한 로또를 출력한다.

- [ ] 로또 번호는 오름차순으로 정렬한다.
- [ ] 로또 갯수는 `구입 금액 / 1000`개 이다.

## 당첨 번호 입력

당첨 번호를 입력받고 `예외 처리`한다.

- [ ] (,)를 기준으로 입력받는다.
- [ ] 숫자가 아니면 `[ERROR]`를 발생시킨다.
- [ ] 당첨 번호가 1 이상 45 이하가 아니면 `[ERROR]`를 발생시킨다.
- [ ] 당첨 번호의 개수가 6개가 아니면 `[ERROR]`를 발생시킨다.

## 보너스 번호 입력

보너스 번호를 입력받고 `예외 처리`한다.

- [ ] 숫자가 아니면 `[ERROR]`를 발생시킨다.
- [ ] 보너스 번호가 1 이상 45 이하가 아니면 `[ERROR]`를 발생시킨다.
- [ ] 보너스 번호가 로또 번호와 중복되면 `[ERROR]`를 발생시킨다.

## 당첨 통계 출력

3개부터 6개 일치까지 모두 출력한다.
총 수익률을 출력한다.

- [ ] 수익률은 소수점 둘째 자리에서 반올림한다.

# 예외 처리

예외 상황 시 에러 문구를 출력한 후 다시 입력받는다.
에러 문구에는 `[ERROR]`가 포함되어야 한다.

### 잘못된 입력

- [ ] `[ERROR] 잘못된 입력입니다. 다시 시도해 주세요.`

### 구입 금액

- [ ] `[ERROR] 구입 금액은 숫자여야 합니다.`
- [ ] `[ERROR] 구입 금액은 양수여야 합니다.`
- [ ] `[ERROR] 구입 금액은 1000으로 나누어져야 합니다.`

### 당첨 번호

- [ ] `[ERROR] 로또 번호는 숫자여야 합니다.`
- [ ] `[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 힙니다.`
- [ ] `[ERROR] 로또 번호는 6개여야 합니다.`

### 보너스 번호

- [ ] `[ERROR] 보너스 번호는 숫자여야 합니다.`
- [ ] `[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.`
- [ ] `[ERROR] 보너스 번호는 당첨 번호와 중복되면 안됩니다.`
