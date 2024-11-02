import { MissionUtils } from '@woowacourse/mission-utils';
import {
  BONUS_NUMBER_ERROR,
  PURCHASE_AMOUNT_ERROR,
} from '../constants/errorMessage.js';
import { ONE_LOTTO_AMOUNT } from '../constants/won.js';
import Lotto from '../Lotto.js';
import { View } from '../view/View.js';

class Controller {
  #amount = null;
  #lottos = [];
  #winning = null;
  #bonus = null;

  constructor() {
    this.view = new View();
  }

  async start() {
    await this.#purchaseLotto();
    await this.#setWinningNumbers();
    await this.#setBonusNumber();
  }

  async #purchaseLotto() {
    if (this.#amount === null) {
      this.#amount = await this.view.promptPurchaseAmount();
      this.#validationAmount(this.#amount);

      const lottoCount = this.#amount / ONE_LOTTO_AMOUNT;
      this.view.promptPurchaseLotto(lottoCount);

      this.#lottos = Array.from(
        { length: lottoCount },
        () => new Lotto(this.#makeRandomNumbers())
      );

      this.#lottos.forEach((lotto) => this.view.printLotto(lotto.getNumbers()));
    }
  }

  async #setWinningNumbers() {
    if (this.#winning === null) {
      const rawInput = await this.view.promptWinningNumbers();
      this.#winning = new Lotto(this.#parseNumbers(rawInput));
    }
  }

  async #setBonusNumber() {
    if (this.#bonus === null) {
      this.#bonus = await this.view.promptBonusNumber();
      this.#validationBonus(this.#bonus);
      this.#checkBonusWithWinningnumbers(this.#bonus);
    }
  }

  #validationAmount(amount) {
    if (isNaN(amount)) throw new Error(PURCHASE_AMOUNT_ERROR.NOT_NUMBER);
    if (amount <= 0) throw new Error(PURCHASE_AMOUNT_ERROR.NOT_POSITIVE);
    if (amount % ONE_LOTTO_AMOUNT !== 0)
      throw new Error(PURCHASE_AMOUNT_ERROR.NOT_DIVIDE_ONE_THOUSAND);
  }

  #validationBonus(bonus) {
    if (isNaN(bonus)) throw new Error(BONUS_NUMBER_ERROR.NOT_NUMBER);
    if (bonus < 1 || bonus > 45) throw new Error(BONUS_NUMBER_ERROR.NOT_RANGE);
  }

  #checkBonusWithWinningnumbers(bonus) {
    if (this.#winning.getNumbers().includes(Number(bonus)))
      throw new Error(BONUS_NUMBER_ERROR.NOT_DUPLICATED);
  }

  #makeRandomNumbers() {
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort(
      (a, b) => a - b
    );
  }

  #parseNumbers(numbers) {
    return numbers.split(',').map((number) => parseInt(number.trim(), 10));
  }

  printError(errorMessage) {
    this.view.printErrorMessage(errorMessage);
  }
}

export default Controller;
