import { Listbox, Transition } from "@headlessui/react";
import { PayoutTokenButton } from "./PayoutTokenButton";
import { Fragment } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";
import { classNames, NATIVE, stringToBlobUrl, TToken } from "common";
import { ChainBalances } from "../../api/types";
import { formatUnits } from "ethers/lib/utils";

export function PayoutTokenDropdown(props: {
  payoutTokenOptions: TToken[];
  selectedPayoutToken?: TToken;
  setSelectedPayoutToken: (payoutToken: TToken) => void;
  style?: string;
  balances?: ChainBalances;
  balanceWarning: boolean;
}) {
  return (
    <div className="mt-1 relative col-span-6 sm:col-span-3">
      <Listbox
        value={props.selectedPayoutToken}
        onChange={props.setSelectedPayoutToken}
      >
        {({ open }) => (
          <div>
            <div className="mb-2 shadow-sm block rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
              <PayoutTokenButton
                token={props.payoutTokenOptions.find(
                  (t) => t.address === props.selectedPayoutToken?.address
                )}
                balance={
                  props.balances &&
                  props.balances[
                    props.selectedPayoutToken?.address.toLowerCase() || ""
                  ]
                }
                balanceWarning={props.balanceWarning}
              />
              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options
                  className={`absolute z-10 mt-1 ' ${props.style ? props.style : "max-h-56"}
                   w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm`}
                >
                  {props.payoutTokenOptions
                    .filter(
                      (t) => t.address.toLowerCase() !== NATIVE.toLowerCase()
                    )
                    .map(
                      (token) =>
                        !token.default && (
                          <Listbox.Option
                            key={token.code}
                            className={({ active }) =>
                              classNames(
                                active
                                  ? "text-white bg-indigo-600"
                                  : "text-gray-900",
                                "relative cursor-default select-none py-2 pl-3 pr-9"
                              )
                            }
                            value={token}
                            data-testid="payout-token-option"
                          >
                            {({ selected, active }) => (
                              <>
                                <div className="flex items-center">
                                  {token.icon ? (
                                    <img
                                      src={stringToBlobUrl(token.icon)}
                                      alt=""
                                      className="h-4 w-4 md:h-6 md:w-6 flex-shrink-0 rounded-full"
                                    />
                                  ) : null}
                                  <span
                                    className={classNames(
                                      selected
                                        ? "font-semibold"
                                        : "font-normal",
                                      "ml-3 block truncate"
                                    )}
                                  >
                                    {token.code}
                                  </span>
                                  <span className="ml-3 text-sm text-gray-500">
                                    {props.balances &&
                                      props.balances[
                                        token.address.toLowerCase()
                                      ] &&
                                      `Balance: ${Number(
                                        formatUnits(
                                          props.balances[
                                            token.address.toLowerCase()
                                          ].value,
                                          props.balances[
                                            token.address.toLowerCase()
                                          ].decimals
                                        )
                                      ).toFixed(3)}`}
                                  </span>
                                </div>

                                {selected ? (
                                  <span
                                    className={classNames(
                                      active ? "text-white" : "text-indigo-600",
                                      "absolute inset-y-0 right-0 flex items-center pr-4"
                                    )}
                                  >
                                    <CheckIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        )
                    )}
                </Listbox.Options>
              </Transition>
            </div>
          </div>
        )}
      </Listbox>
    </div>
  );
}
