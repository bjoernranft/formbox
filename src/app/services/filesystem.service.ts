import { Injectable } from '@angular/core';
import { OfficeService } from './office.service';

/**
 * Schnittstelle für Dateisystem.
 */
@Injectable()
export class FileSystemService {

  constructor(private officeService: OfficeService) { }

  async getFileUrl(): Promise<string> {
      return this.officeService.getFileUrl().then(url => {
        return url;
      });
  }
}