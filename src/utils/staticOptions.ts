import { find } from 'lodash';

export const staticOptions = {
  lendToken: [
    { label: 'BUSD', value: '0xDc6dF65b2fA0322394a8af628Ad25Be7D7F413c2' },
    { label: 'DAI', value: '0xf2bDB4ba16b7862A1bf0BE03CD5eE25147d7F096' },
  ],
  borrowToken: [
    { label: 'BTC', value: '0xF592aa48875a5FDE73Ba64B527477849C73787ad' },
    { label: 'BNB', value: '0x0000000000000000000000000000000000000000' },
  ],
  // 'MATCH, EXECUTION, FINISH, LIQUIDATION, UNDONE'
  state: [
    { label: 'MATCH', value: '0' },
    { label: 'EXECUTION', value: '2' },
    { label: 'FINISH', value: '3' },
    { label: 'LIQUIDATION', value: '4' },
    { label: 'UNDONE', value: '5' },
  ],
};

type StaticOptionsName = keyof typeof staticOptions;

/**
 *
 * @param staticOptionsName options名称
 * @param value 要显示的value
 * @returns value的label
 */
export const getFieldsLabel = (staticOptionsName: StaticOptionsName, value?: number | string) => {
  return find(
    (staticOptions as Record<StaticOptionsName, Global.Option[]>)[staticOptionsName],
    (s) => s.value === value,
  )?.label;
};
