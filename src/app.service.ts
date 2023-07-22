import { Injectable } from '@nestjs/common';
import { readdirSync, readFileSync } from 'fs';
import { resolve } from 'path';
import './types/index'

const getMusicPath = (): Music[] => {

    const files = readdirSync(resolve(__dirname, '../music/'));

    const fileList: string[] = files.filter((name) => name.includes('.mp3'))
    const filePathList = fileList.map((file) => 'http://1.117.61.181:7676/music/' + file);
    const musicList = filePathList.map((path) => getDetails(path));

    return musicList;
}

const getDetails = (filePath: string): Music => {

    const musicPath = filePath;
    const lrcPath = filePath.replace('.mp3', '.lrc');
    const imgPath = filePath.replace('.mp3', '.png');
    const title = filePath.split('/music/')[1].split('.mp')[0];


    const files = { musicPath, lrcPath, imgPath, title };
    return files
}


@Injectable()
export class AppService {
    getMusicList(): Music[] {
        return getMusicPath();
    }

    getMusicLyrics(name: string): string {

        const data = readFileSync(resolve(__dirname, `../music/${name}.lrc`), 'utf-8');

        return data.toString();

    }

}

