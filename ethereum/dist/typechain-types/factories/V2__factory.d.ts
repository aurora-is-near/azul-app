import { Provider, TransactionRequest } from "@ethersproject/providers";
import { ContractFactory, Overrides, Signer } from "ethers";
import type { V2, V2Interface } from "../V2";
declare type V2ConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;
export declare class V2__factory extends ContractFactory {
    constructor(...args: V2ConstructorParams);
    deploy(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): Promise<V2>;
    getDeployTransaction(overrides?: Overrides & {
        from?: string | Promise<string>;
    }): TransactionRequest;
    attach(address: string): V2;
    connect(signer: Signer): V2__factory;
    static readonly bytecode = "0x60a06040523060601b60805234801561001757600080fd5b5060805160601c61337c61004b600039600081816109450152818161098501528181610a290152610a69015261337c6000f3fe60806040526004361061015d5760003560e01c806301ffc9a71461016257806306fdde0314610197578063081812fc146101b9578063095ea7b3146101e65780630c6d1f2a1461020857806318160ddd1461028657806323b872dd146102a55780632f745c59146102c557806334325dab146102e55780633659cfe61461030557806342842e0e14610325578063451b4dda146103455780634f1ef286146103595780634f6ccce71461036c5780636352211e1461038c5780636e9a7d0b146103ac57806370a08231146103cc578063715018a6146103ec5780637badfa2e146104015780638da5cb5b1461042257806395d89b4114610437578063a22cb4651461044c578063b27f82f01461046c578063b88d4fde1461048c578063c4d66de8146104ac578063c87b56dd146104cc578063d54ad2a1146104ec578063e985e9c514610503578063f2fde38b14610523578063f3fe12c914610543575b600080fd5b34801561016e57600080fd5b5061018261017d366004612cef565b610563565b60405190151581526020015b60405180910390f35b3480156101a357600080fd5b506101ac61058e565b60405161018e9190612f24565b3480156101c557600080fd5b506101d96101d4366004612cbd565b610620565b60405161018e9190612ed3565b3480156101f257600080fd5b50610206610201366004612bdf565b6106ad565b005b34801561021457600080fd5b50610228610223366004612cbd565b6107be565b60405161018e919081511515815260208083015115159082015260408083015190820152606080830151908201526080808301519082015260a0808301519082015260c0918201516001600160a01b03169181019190915260e00190565b34801561029257600080fd5b506099545b60405190815260200161018e565b3480156102b157600080fd5b506102066102c0366004612ab6565b6107df565b3480156102d157600080fd5b506102976102e0366004612bdf565b610810565b3480156102f157600080fd5b50610206610300366004612d5d565b6108a6565b34801561031157600080fd5b50610206610320366004612a60565b61093a565b34801561033157600080fd5b50610206610340366004612ab6565b610a03565b34801561035157600080fd5b506002610297565b610206610367366004612b90565b610a1e565b34801561037857600080fd5b50610297610387366004612cbd565b610ad8565b34801561039857600080fd5b506101d96103a7366004612cbd565b610b6b565b3480156103b857600080fd5b506102066103c7366004612c0b565b610be2565b3480156103d857600080fd5b506102976103e7366004612a60565b610d08565b3480156103f857600080fd5b50610206610d8f565b34801561040d57600080fd5b5061016b546101d9906001600160a01b031681565b34801561042e57600080fd5b506101d9610dca565b34801561044357600080fd5b506101ac610dda565b34801561045857600080fd5b50610206610467366004612b62565b610de9565b34801561047857600080fd5b50610228610487366004612cbd565b610df4565b34801561049857600080fd5b506102066104a7366004612af7565b610e74565b3480156104b857600080fd5b506102066104c7366004612a60565b610ea6565b3480156104d857600080fd5b506101ac6104e7366004612cbd565b610f85565b3480156104f857600080fd5b506102976101605481565b34801561050f57600080fd5b5061018261051e366004612a7d565b611262565b34801561052f57600080fd5b5061020661053e366004612a60565b611290565b34801561054f57600080fd5b5061029761055e366004612d29565b61132d565b60006001600160e01b0319821663780e9d6360e01b1480610588575061058882611778565b92915050565b60606065805461059d90613170565b80601f01602080910402602001604051908101604052809291908181526020018280546105c990613170565b80156106165780601f106105eb57610100808354040283529160200191610616565b820191906000526020600020905b8154815290600101906020018083116105f957829003601f168201915b5050505050905090565b600061062b826117c8565b6106915760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152606960205260409020546001600160a01b031690565b60006106b882610b6b565b9050806001600160a01b0316836001600160a01b031614156107265760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b6064820152608401610688565b336001600160a01b038216148061074257506107428133611262565b6107af5760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776044820152771b995c881b9bdc88185c1c1c9bdd995908199bdc88185b1b60421b6064820152608401610688565b6107b983836117e5565b505050565b6107c661290e565b600082815261016a602052604090205461058890610df4565b6107e93382611853565b6108055760405162461bcd60e51b815260040161068890613080565b6107b983838361191d565b600061081b83610d08565b821061087d5760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201526a74206f6620626f756e647360a81b6064820152608401610688565b506001600160a01b03919091166000908152609760209081526040808320938352929052205490565b336108af610dca565b6001600160a01b0316146108d55760405162461bcd60e51b81526004016106889061304b565b8161016184600381106108ea576108ea61321c565b600302016000019080519060200190610904929190612958565b5080610161846003811061091a5761091a61321c565b600302016001019080519060200190610934929190612958565b50505050565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156109835760405162461bcd60e51b815260040161068890612f89565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166109b5611ab6565b6001600160a01b0316146109db5760405162461bcd60e51b815260040161068890612fc3565b6109e481611ad2565b60408051600080825260208201909252610a0091839190611b01565b50565b6107b983838360405180602001604052806000815250610e74565b306001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161415610a675760405162461bcd60e51b815260040161068890612f89565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610a99611ab6565b6001600160a01b031614610abf5760405162461bcd60e51b815260040161068890612fc3565b610ac882611ad2565b610ad482826001611b01565b5050565b6000610ae360995490565b8210610b465760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201526b7574206f6620626f756e647360a01b6064820152608401610688565b60998281548110610b5957610b5961321c565b90600052602060002001549050919050565b6000818152606760205260408120546001600160a01b0316806105885760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b6064820152608401610688565b33610beb610dca565b6001600160a01b031614610c115760405162461bcd60e51b81526004016106889061304b565b60038110610c1e57600080fd5b60005b82518110156107b9576000838281518110610c3e57610c3e61321c565b6020908102919091018101516040805160e081018252600180825260008286018181528385018a8152606085018381526080860184815260a0870185815260c0880186815299865261015f909a529690932094518554925161ffff1990931690151561ff00191617610100921515929092029190911784555191830191909155516002820155905160038201559151600483015551600590910180546001600160a01b0319166001600160a01b039092169190911790555080610d00816131ab565b915050610c21565b60006001600160a01b038216610d735760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b6064820152608401610688565b506001600160a01b031660009081526068602052604090205490565b33610d98610dca565b6001600160a01b031614610dbe5760405162461bcd60e51b81526004016106889061304b565b610dc86000611c48565b565b61012d546001600160a01b031690565b60606066805461059d90613170565b610ad4338383611c9b565b610dfc61290e565b50600090815261015f6020908152604091829020825160e081018452815460ff80821615158352610100909104161515928101929092526001810154928201929092526002820154606082015260038201546080820152600482015460a08201526005909101546001600160a01b031660c082015290565b610e7e3383611853565b610e9a5760405162461bcd60e51b815260040161068890613080565b61093484848484611d66565b600054610100900460ff1680610ebf575060005460ff16155b610edb5760405162461bcd60e51b815260040161068890612ffd565b600054610100900460ff16158015610efd576000805461ffff19166101011790555b61016b80546001600160a01b0319166001600160a01b038416179055604080518082018252600480825263105e9d5b60e21b6020808401919091528351808501909452908352631056955360e21b90830152610f5891611d99565b610f60611e20565b610f68611ea3565b610f70611f01565b8015610ad4576000805461ff00191690555050565b6060610f90826117c8565b610ff45760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b6064820152608401610688565b6000610fff836107be565b9050600061016182604001516003811061101b5761101b61321c565b6003020160405180606001604052908160008201805461103a90613170565b80601f016020809104026020016040519081016040528092919081815260200182805461106690613170565b80156110b35780601f10611088576101008083540402835291602001916110b3565b820191906000526020600020905b81548152906001019060200180831161109657829003601f168201915b505050505081526020016001820180546110cc90613170565b80601f01602080910402602001604051908101604052809291908181526020018280546110f890613170565b80156111455780601f1061111a57610100808354040283529160200191611145565b820191906000526020600020905b81548152906001019060200180831161112857829003601f168201915b5050505050815260200160028201548152505090506040518060600160405280603e8152602001613309603e91396111808360600151611f68565b6040518060400160405280601b81526020017a129919161299193232b9b1b934b83a34b7b71299191299a092991960291b81525083600001516040518060400160405280600b81526020016a01022b234ba34b7b71016960ad1b8152506111ea8760800151611f68565b60408051808201825260158152741299191612991934b6b0b3b29299191299a092991960591b60208083019190915289810151835180850185526006815265094c8c894dd160d21b81840152935161124a9a999897969594919201612e11565b60405160208183030381529060405292505050919050565b6001600160a01b039182166000908152606a6020908152604080832093909416825291909152205460ff1690565b33611299610dca565b6001600160a01b0316146112bf5760405162461bcd60e51b81526004016106889061304b565b6001600160a01b0381166113245760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b6064820152608401610688565b610a0081611c48565b600080826040516020016113419190612df5565b604051602081830303815290604052905060006002826040516113649190612df5565b602060405180830381855afa158015611381573d6000803e3d6000fd5b5050506040513d601f19601f820116820180604052508101906113a49190612cd6565b600081815261015f6020908152604091829020825160e081018452815460ff8082161515808452610100909204161515938201939093526001820154938101939093526002810154606084015260038101546080840152600481015460a0840152600501546001600160a01b031660c08301529192509061145a5760405162461bcd60e51b815260206004820152601060248201526f496e76616c69642070617373636f646560801b6044820152606401610688565b8060200151156114ac5760405162461bcd60e51b815260206004820152601d60248201527f4e465420636c61696d656420666f7220746869732070617373636f64650000006044820152606401610688565b60016020820152604081015160009061016190600381106114cf576114cf61321c565b600302016040518060600160405290816000820180546114ee90613170565b80601f016020809104026020016040519081016040528092919081815260200182805461151a90613170565b80156115675780601f1061153c57610100808354040283529160200191611567565b820191906000526020600020905b81548152906001019060200180831161154a57829003601f168201915b5050505050815260200160018201805461158090613170565b80601f01602080910402602001604051908101604052809291908181526020018280546115ac90613170565b80156115f95780601f106115ce576101008083540402835291602001916115f9565b820191906000526020600020905b8154815290600101906020018083116115dc57829003601f168201915b505050505081526020016002820154815250509050600161016060008282546116229190613101565b909155505061016054606083015260408101805160019190611645908390613101565b90525060408181015160808401908152600060a085018181523360c0870190815287835261015f602090815285842088518154928a015161ffff1990931690151561ff001916176101009215159290920291909117815594870151600186018190556060880151600287015593516003808701919091559151600486015551600590940180546001600160a01b0319166001600160a01b03909516949094179093559183916101619181106116fc576116fc61321c565b60030201600082015181600001908051906020019061171c929190612958565b5060208281015180516117359260018501920190612958565b506040918201516002909101556060840151600090815261016a6020522084905561176a6117603390565b84606001516120e3565b505060600151949350505050565b60006001600160e01b031982166380ac58cd60e01b14806117a957506001600160e01b03198216635b5e139f60e01b145b8061058857506301ffc9a760e01b6001600160e01b0319831614610588565b6000908152606760205260409020546001600160a01b0316151590565b600081815260696020526040902080546001600160a01b0319166001600160a01b038416908117909155819061181a82610b6b565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600061185e826117c8565b6118bf5760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b6064820152608401610688565b60006118ca83610b6b565b9050806001600160a01b0316846001600160a01b031614806119055750836001600160a01b03166118fa84610620565b6001600160a01b0316145b8061191557506119158185611262565b949350505050565b826001600160a01b031661193082610b6b565b6001600160a01b0316146119985760405162461bcd60e51b815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201526839903737ba1037bbb760b91b6064820152608401610688565b6001600160a01b0382166119fa5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b6064820152608401610688565b611a058383836120fd565b611a106000826117e5565b6001600160a01b0383166000908152606860205260408120805460019290611a3990849061312d565b90915550506001600160a01b0382166000908152606860205260408120805460019290611a67908490613101565b909155505060008181526067602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716916000805160206132e983398151915291a4505050565b6000805160206132a2833981519152546001600160a01b031690565b33611adb610dca565b6001600160a01b031614610a005760405162461bcd60e51b81526004016106889061304b565b6000611b0b611ab6565b9050611b16846121b5565b600083511180611b235750815b15611b3457611b328484612248565b505b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd9143805460ff16611c4157805460ff19166001178155604051611baf908690611b80908590602401612ed3565b60408051601f198184030181529190526020810180516001600160e01b0316631b2ce7f360e11b179052612248565b50805460ff19168155611bc0611ab6565b6001600160a01b0316826001600160a01b031614611c385760405162461bcd60e51b815260206004820152602f60248201527f45524331393637557067726164653a207570677261646520627265616b73206660448201526e75727468657220757067726164657360881b6064820152608401610688565b611c4185612333565b5050505050565b61012d80546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b816001600160a01b0316836001600160a01b03161415611cf95760405162461bcd60e51b815260206004820152601960248201527822a9219b99189d1030b8383937bb32903a379031b0b63632b960391b6044820152606401610688565b6001600160a01b038381166000818152606a6020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b611d7184848461191d565b611d7d84848484612373565b6109345760405162461bcd60e51b815260040161068890612f37565b600054610100900460ff1680611db2575060005460ff16155b611dce5760405162461bcd60e51b815260040161068890612ffd565b600054610100900460ff16158015611df0576000805461ffff19166101011790555b611df8612480565b611e00612480565b611e0a83836124ea565b80156107b9576000805461ff0019169055505050565b600054610100900460ff1680611e39575060005460ff16155b611e555760405162461bcd60e51b815260040161068890612ffd565b600054610100900460ff16158015611e77576000805461ffff19166101011790555b611e7f612480565b611e87612480565b611e8f612480565b8015610a00576000805461ff001916905550565b600054610100900460ff1680611ebc575060005460ff16155b611ed85760405162461bcd60e51b815260040161068890612ffd565b600054610100900460ff16158015611e7f576000805461ffff1916610101179055611e87612480565b600054610100900460ff1680611f1a575060005460ff16155b611f365760405162461bcd60e51b815260040161068890612ffd565b600054610100900460ff16158015611f58576000805461ffff19166101011790555b611f60612480565b611e8f61257f565b606081611f8c5750506040805180820190915260018152600360fc1b602082015290565b60408051606480825260a0820190925260009160208201818036833701905050905060005b831561201b576000611fc4600a866131c6565b9050611fd1600a86613119565b9450611fde816030613101565b60f81b8383611fec816131ab565b945081518110611ffe57611ffe61321c565b60200101906001600160f81b031916908160001a90535050611fb1565b6000816001600160401b0381111561203557612035613232565b6040519080825280601f01601f19166020018201604052801561205f576020820181803683370190505b50905060005b828110156120da5783600161207a838661312d565b612084919061312d565b815181106120945761209461321c565b602001015160f81c60f81b8282815181106120b1576120b161321c565b60200101906001600160f81b031916908160001a905350806120d2816131ab565b915050612065565b50949350505050565b610ad48282604051806020016040528060008152506125df565b6001600160a01b0383166121585761215381609980546000838152609a60205260408120829055600182018355919091527f72a152ddfb8e864297c917af52ea6c1c68aead0fee1a62673fcc7e0c94979d000155565b61217b565b816001600160a01b0316836001600160a01b03161461217b5761217b8382612612565b6001600160a01b038216612192576107b9816126af565b826001600160a01b0316826001600160a01b0316146107b9576107b9828261275e565b803b6122195760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b6064820152608401610688565b6000805160206132a283398151915280546001600160a01b0319166001600160a01b0392909216919091179055565b6060823b6122a75760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b6064820152608401610688565b600080846001600160a01b0316846040516122c29190612df5565b600060405180830381855af49150503d80600081146122fd576040519150601f19603f3d011682016040523d82523d6000602084013e612302565b606091505b509150915061232a82826040518060600160405280602781526020016132c2602791396127a2565b95945050505050565b61233c816121b5565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b60006001600160a01b0384163b1561247557604051630a85bd0160e11b81526001600160a01b0385169063150b7a02906123b7903390899088908890600401612ee7565b602060405180830381600087803b1580156123d157600080fd5b505af1925050508015612401575060408051601f3d908101601f191682019092526123fe91810190612d0c565b60015b61245b573d80801561242f576040519150601f19603f3d011682016040523d82523d6000602084013e612434565b606091505b5080516124535760405162461bcd60e51b815260040161068890612f37565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050611915565b506001949350505050565b600054610100900460ff1680612499575060005460ff16155b6124b55760405162461bcd60e51b815260040161068890612ffd565b600054610100900460ff16158015611e8f576000805461ffff19166101011790558015610a00576000805461ff001916905550565b600054610100900460ff1680612503575060005460ff16155b61251f5760405162461bcd60e51b815260040161068890612ffd565b600054610100900460ff16158015612541576000805461ffff19166101011790555b8251612554906065906020860190612958565b508151612568906066906020850190612958565b5080156107b9576000805461ff0019169055505050565b600054610100900460ff1680612598575060005460ff16155b6125b45760405162461bcd60e51b815260040161068890612ffd565b600054610100900460ff161580156125d6576000805461ffff19166101011790555b611e8f33611c48565b6125e983836127e2565b6125f66000848484612373565b6107b95760405162461bcd60e51b815260040161068890612f37565b6000600161261f84610d08565b612629919061312d565b60008381526098602052604090205490915080821461267c576001600160a01b03841660009081526097602090815260408083208584528252808320548484528184208190558352609890915290208190555b5060009182526098602090815260408084208490556001600160a01b039094168352609781528383209183525290812055565b6099546000906126c19060019061312d565b6000838152609a6020526040812054609980549394509092849081106126e9576126e961321c565b90600052602060002001549050806099838154811061270a5761270a61321c565b6000918252602080832090910192909255828152609a9091526040808220849055858252812055609980548061274257612742613206565b6001900381819060005260206000200160009055905550505050565b600061276983610d08565b6001600160a01b039093166000908152609760209081526040808320868452825280832085905593825260989052919091209190915550565b606083156127b15750816127db565b8251156127c15782518084602001fd5b8160405162461bcd60e51b81526004016106889190612f24565b9392505050565b6001600160a01b0382166128385760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f20616464726573736044820152606401610688565b612841816117c8565b1561288d5760405162461bcd60e51b815260206004820152601c60248201527b115490cdcc8c4e881d1bdad95b88185b1c9958591e481b5a5b9d195960221b6044820152606401610688565b612899600083836120fd565b6001600160a01b03821660009081526068602052604081208054600192906128c2908490613101565b909155505060008181526067602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392906000805160206132e9833981519152908290a45050565b6040518060e001604052806000151581526020016000151581526020016000815260200160008152602001600081526020016000815260200160006001600160a01b031681525090565b82805461296490613170565b90600052602060002090601f01602090048101928261298657600085556129cc565b82601f1061299f57805160ff19168380011785556129cc565b828001600101855582156129cc579182015b828111156129cc5782518255916020019190600101906129b1565b506129d89291506129dc565b5090565b5b808211156129d857600081556001016129dd565b600082601f830112612a0257600080fd5b81356001600160401b03811115612a1b57612a1b613232565b612a2e601f8201601f19166020016130d1565b818152846020838601011115612a4357600080fd5b816020850160208301376000918101602001919091529392505050565b600060208284031215612a7257600080fd5b81356127db81613248565b60008060408385031215612a9057600080fd5b8235612a9b81613248565b91506020830135612aab81613248565b809150509250929050565b600080600060608486031215612acb57600080fd5b8335612ad681613248565b92506020840135612ae681613248565b929592945050506040919091013590565b60008060008060808587031215612b0d57600080fd5b8435612b1881613248565b93506020850135612b2881613248565b92506040850135915060608501356001600160401b03811115612b4a57600080fd5b612b56878288016129f1565b91505092959194509250565b60008060408385031215612b7557600080fd5b8235612b8081613248565b91506020830135612aab8161325d565b60008060408385031215612ba357600080fd5b8235612bae81613248565b915060208301356001600160401b03811115612bc957600080fd5b612bd5858286016129f1565b9150509250929050565b60008060408385031215612bf257600080fd5b8235612bfd81613248565b946020939093013593505050565b60008060408385031215612c1e57600080fd5b82356001600160401b0380821115612c3557600080fd5b818501915085601f830112612c4957600080fd5b8135602082821115612c5d57612c5d613232565b8160051b9250612c6e8184016130d1565b8281528181019085830185870184018b1015612c8957600080fd5b600096505b84871015612cac578035835260019690960195918301918301612c8e565b509997909101359750505050505050565b600060208284031215612ccf57600080fd5b5035919050565b600060208284031215612ce857600080fd5b5051919050565b600060208284031215612d0157600080fd5b81356127db8161326b565b600060208284031215612d1e57600080fd5b81516127db8161326b565b600060208284031215612d3b57600080fd5b81356001600160401b03811115612d5157600080fd5b611915848285016129f1565b600080600060608486031215612d7257600080fd5b8335925060208401356001600160401b0380821115612d9057600080fd5b612d9c878388016129f1565b93506040860135915080821115612db257600080fd5b50612dbf868287016129f1565b9150509250925092565b60008151808452612de1816020860160208601613144565b601f01601f19169290920160200192915050565b60008251612e07818460208701613144565b9190910192915050565b60008a51612e23818460208f01613144565b8a5190830190612e37818360208f01613144565b8a51612e498183850160208f01613144565b8a51929091010190612e5f818360208d01613144565b8851612e718183850160208d01613144565b8851929091010190612e87818360208b01613144565b8651612e998183850160208b01613144565b8651929091010190612eaf818360208901613144565b8451612ec18183850160208901613144565b9101019b9a5050505050505050505050565b6001600160a01b0391909116815260200190565b6001600160a01b0385811682528416602082015260408101839052608060608201819052600090612f1a90830184612dc9565b9695505050505050565b6020815260006127db6020830184612dc9565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6020808252602c9082015260008051602061328283398151915260408201526b19195b1959d85d1958d85b1b60a21b606082015260800190565b6020808252602c9082015260008051602061328283398151915260408201526b6163746976652070726f787960a01b606082015260800190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b604051601f8201601f191681016001600160401b03811182821017156130f9576130f9613232565b604052919050565b60008219821115613114576131146131da565b500190565b600082613128576131286131f0565b500490565b60008282101561313f5761313f6131da565b500390565b60005b8381101561315f578181015183820152602001613147565b838111156109345750506000910152565b600181811c9082168061318457607f821691505b602082108114156131a557634e487b7160e01b600052602260045260246000fd5b50919050565b60006000198214156131bf576131bf6131da565b5060010190565b6000826131d5576131d56131f0565b500690565b634e487b7160e01b600052601160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b634e487b7160e01b600052603160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052604160045260246000fd5b6001600160a01b0381168114610a0057600080fd5b8015158114610a0057600080fd5b6001600160e01b031981168114610a0057600080fdfe46756e6374696f6e206d7573742062652063616c6c6564207468726f75676820360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564ddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef646174613a6170706c69636174696f6e2f6a736f6e3b636861727365743d5554462d382c2537422532326e616d65253232253341253232415a554c202d20a264697066735822122077bea54e98d9c96a980eafe92e4c737867e1553e852f67987935c3e60b1c955364736f6c63430008070033";
    static readonly abi: ({
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: {
            components: {
                internalType: string;
                name: string;
                type: string;
            }[];
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): V2Interface;
    static connect(address: string, signerOrProvider: Signer | Provider): V2;
}
export {};
