<?php

function JsonResp($param){
    if($param['code'] == 1){
        return sucJsonResp($param['msg']);
    }else{
        return errJsonResp($param['msg'], $param['code']);
    }
}

function sucJsonResp($data=[],$msg='success!') {
    return encodeJsonResponse(0, $msg, $data);
}

function errJsonResp($msg,$code = 500) {
    return encodeJsonResponse($code, $msg);
}


function encodeJsonResponse($code, $msg, $data=[]) {
    return response()->json([
        'code' => $code,
        'message' => $msg,
        'data' => $data
    ]);
}

/**

 * 递归获取下级数组 返回一维数组

 * @param array $data

 * @param number $pid

 * @param array $SonNode

 * @return array

 */

function getSonNode($member,$id=0,$SonNode = array()){

    $SonNode[] = $id;
    $data = isset($member[$id]) ? $member[$id] : [];
    foreach($data as $k=>$v){

        if(isset($member[$v])){

            $SonNode = getSonNode($member,$v,$SonNode);

        }else{
            $SonNode[] = $v;
        }
        unset($data[$k]);

    }
    unset($data);
    unset($member);

    return $SonNode;

}
