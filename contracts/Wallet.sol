// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;
import {Proxiable} from "../contracts/Proxiable.sol";

contract Wallet is Proxiable{

    mapping(address => uint256) usersDeposit;

    address public owner;
    bool initialized;

    function init(address _addr) external {
        require(!initialized, "Already initialized");
        owner = _addr;
        initialized = true;
    }

    function deposit() external payable {
        require(msg.value != 0, "Amount can't be zero");
        usersDeposit[msg.sender] += msg.value;
    }

    function getUserBalance(address _addr) external view returns(uint256){
        return usersDeposit[_addr];
    }

    function upgradeContract(address _newAddress) external {
        require(msg.sender == owner, "You are not an admin");
        updateCodeAddress(_newAddress);
    }
}